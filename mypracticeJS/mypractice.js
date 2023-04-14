
( function( $ ) {

    // Settings
    const items = 28; // Segments on wheel
    const spinSpeed = randNumber( 1, 10 ); // Spin speed multiplier
    const spinDuration = randNumber( 2, 5 ); // In seconds
    const spinDirection = randNumber( 0, 1 ) ? 'up' : 'down'; // Animate up  or down
    
    // Vars
    const $wheel = $( '.wheel .wheel__inner' );
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items;
    const circumference = Math.PI * diameter;
    const height = circumference / items;
    
    // Trackers
    let wheelAngle = 0;
    const wheelStarted = new Date();
    
    // Add segments to the wheel
    for ( let i = 0; i < items; i++ ) {
        var startAngle = angle * i;
        var endAngle = angle * ( i + 1 );
        var transform = `rotateX(${ startAngle }deg) translateZ(${ radius }px)`;

        var $segment = $( '<div>', {
            class: 'wheel__segment',
            html: `<span>Item ${ i }</span>` 
        } ).css( {
            'transform': transform,
            'height': height,
        } );
        
        // Add start and end angles for this segment
        $segment.attr( 'data-start-angle', startAngle );
        $segment.attr( 'data-end-angle', endAngle );
        
        $segment.appendTo( $wheel );
    }
    
    
    /**
     * Print debug info to DOM
     *
     * @param {object}
     */
    function logInfo( data ) {
        const $log = $( 'textarea#log' );
        let logString = '';
        
        logString += '-----' + "\n";
        for ( var key in data ) {
            logString += `${ key }: ${ data[ key ] }` + "\n";
        }
        logString += "\n";
        
        // Prepend log to last value
        logString += $log.val();
        
        // Update field value
        $log.val( logString );
    }
    
    /**
     * Get random number between min & max (inclusive)
     *
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    function randNumber( min, max ) {
        min = Math.ceil( min );
        max = Math.floor( max );
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    /**
     * Limit angles to 0 - 360
     *
     * @param {number}
     * @returns {number}
     */
    function normaliseAngle( angle ) {
        angle = Math.abs( angle ) % 360;
        angle = 360 - angle;
        return angle;
    }
    
    /**
     * Get the wheel segment at a specific angle
     *
     * @param {number} angle
     * @returns {jQuery}
     */
    function segmentAtAngle( angle ) {

        angle = normaliseAngle( angle );
    
        const $found = $wheel.find( '.wheel__segment' ).filter( function() {
            const startAngle = parseFloat( $( this ).data( 'start-angle' ) );
            const endAngle = parseFloat( $( this ).data( 'end-angle' ) );
            return angle >= startAngle && angle < endAngle;
        } );
        
        return $found;
    }
    
    /**
     * @var {integer} Unique ID of requestAnimationFrame callback
     */
    var animationId = window.requestAnimationFrame( function tick() {
    
        // Time passed since wheel started spinning (in seconds)
        const timePassed = ( new Date() - wheelStarted ) / 1000;
        
        // Speed modifier value (can't be zero)
        let speedModifier = parseInt( spinSpeed ) || 1;
        
        // Decelerate animation if we're over the animation duration
        if ( timePassed > spinDuration ) {

            const decelTicks = ( spinDuration - 1 ) * 60;
            const deceleration = Math.exp( Math.log( 0.0001 / speedModifier ) / decelTicks );
            const decelRate = ( 1 - ( ( timePassed - spinDuration ) / 10 ) ) * deceleration;

            speedModifier = speedModifier * decelRate;

            // Stop animation from going in reverse
            if ( speedModifier < 0 ) {
                speedModifier = 0;
            }
        }
        
        // Print debug info
        logInfo( {
            timePassed: timePassed,
            speedModifier: speedModifier,
            wheelAngle: wheelAngle,
            normalisedAngle: normaliseAngle( wheelAngle )
        } );
        
        // Wheel not moving, animation must have finished
        if ( speedModifier <= 0 ) {
            window.cancelAnimationFrame( animationId );

            const $stopped = segmentAtAngle( wheelAngle );
            alert( $stopped.text() );

            return;
        }
        
        // Increase wheel angle for animating upwards
        if ( spinDirection === 'up' ) {
            wheelAngle += speedModifier;
        }
        
        // Decrease wheel angle for animating downwards
        else {
            wheelAngle -= speedModifier;
        }
        
        // CSS transform value
        const transform = `rotateX(${wheelAngle}deg) scale3d(0.875, 0.875, 0.875)`;

        $wheel.css( {
            '-webkit-transform': transform,
            '-moz-transform': transform,
            '-ms-transform': transform,
            '-o-transform': transform,
            'transform': transform,
            'transform-origin': `50% calc(50% + ${height/2}px)`,
            'margin-top': `-${height}px`
        } );
    
        // New tick
        animationId = window.requestAnimationFrame( tick );
    } );
    
} )( jQuery );