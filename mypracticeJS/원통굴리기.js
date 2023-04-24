
( function( $ ) {

    // Settings
    const items = 28; // Segments on wheel 총 휠의 개수
    const spinSpeed = randNumber( 1, 10 ); // Spin speed multiplier 회전속도
    const spinDuration = randNumber( 2, 5 ); // In seconds 초 단위
    const spinDirection = randNumber( 0, 1 ) ? 'up' : 'down'; // Animate up  or down
    // 위 또는 아래 애니메이션
    
    // Vars
    const $wheel = $( '.wheel .wheel__inner' ); // 휠
    const diameter = $wheel.height(); // 직경
    const radius = diameter / 2; // 반지름
    const angle = 360 / items; // 각도
    const circumference = Math.PI * diameter; // 둘레
    const height = circumference / items; // 높이
    
    // Trackers
    let wheelAngle = 0;
    const wheelStarted = new Date();
    
    // Add segments to the wheel 휠에 세그먼트 추가
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
        // 이 세그먼트의 시작 각도와 끝 각도를 추가
        $segment.attr( 'data-start-angle', startAngle );
        $segment.attr( 'data-end-angle', endAngle );
        
        $segment.appendTo( $wheel );
    }
    
    
    /**
     * 디버그 정보를 DOM에 출력
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
        
        // 로그를 마지막 값에 추가
        // Prepend log to last value
        logString += $log.val();
        
        // 필드 값 업데이트
        // Update field value
        $log.val( logString );
    }
    
    /**
     * 최소값과 최대값 사이의 난수 얻기 (포함)
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
    
    /** 각도를 0 - 360 으로 제한
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
     * 특정 각도에서 휠 세그먼트 가져오기
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
    
        // 바퀴가 회전하기 시작한 이후 경과된 시간(초)
        // Time passed since wheel started spinning (in seconds)
        const timePassed = ( new Date() - wheelStarted ) / 1000;
        
        // 속도 수정자 값(0이 될 수 없음)
        // Speed modifier value (can't be zero)
        let speedModifier = parseInt( spinSpeed ) || 1;
        
        // 애니메이션 지속 시간을 초과하면 애니메이션을 감속합니다.
        // Decelerate animation if we're over the animation duration
        if ( timePassed > spinDuration ) {

            const decelTicks = ( spinDuration - 1 ) * 3;
            const deceleration = Math.exp( Math.log( 0.0001 / speedModifier ) / decelTicks );
            const decelRate = ( 1 - ( ( timePassed - spinDuration ) / 10 ) ) * deceleration;

            speedModifier = speedModifier * decelRate;

            // 애니메이션이 역방향으로 진행되지 않도록 중지
            // Stop animation from going in reverse
            if ( speedModifier < 0 ) {
                speedModifier = 0;
            }
        }
        
        // 디버그 정보 출력
        // Print debug info
        logInfo( {
            timePassed: timePassed,
            speedModifier: speedModifier,
            wheelAngle: wheelAngle,
            normalisedAngle: normaliseAngle( wheelAngle )
        } );
        
        // 휠이 움직이지 않음, 애니메이션이 완료되었음에 틀림없다.
        // Wheel not moving, animation must have finished
        if ( speedModifier <= 0 ) {
            window.cancelAnimationFrame( animationId );

            const $stopped = segmentAtAngle( wheelAngle );
            // alert( $stopped.text() );

            return;
        }
        
        // 위쪽 애니메이션을 위해 바퀴 각도를 늘립니다.
        // Increase wheel angle for animating upwards
        if ( spinDirection === 'up' ) {
            wheelAngle += speedModifier;
        }
        
        // 아래쪽 애니메이션을 위해 휠 각도를 줄임
        // Decrease wheel angle for animating downwards
        else {
            wheelAngle -= speedModifier;
        }
        
        // CSS 변환값
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
    
        // 새로운 틱
        // New tick
        animationId = window.requestAnimationFrame( tick );
    } );
    
} )( jQuery );