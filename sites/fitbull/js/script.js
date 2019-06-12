window.onload = function() {
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10000);
    const fovInRadians = (camera.fov * Math.PI) / 180;
    // Camera aspect ratio is 1. The view width and height are equal.
    const viewSize = Math.abs(camera.position.z * Math.tan(fovInRadians / 2) * 2);
    const geometry = new THREE.PlaneBufferGeometry(viewSize *1.5,viewSize,60,60);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            // Progress of the effect
            u_progress: { type: "f", value: 0 },
            // In which direction is the effect going
            u_direction: { type: "f", value: 1 },
            u_waveIntensity: { type: "f", value: 0 }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        side: THREE.DoubleSide
    });
    uniform float u_progress;
    uniform float u_direction;
    uniform float u_offset;
    uniform float u_time;
    void main(){
	    vec3 pos = position.xyz;
	    float distance = length(uv.xy - 0.5 );
	    float maxDistance = length(vec2(0.5,0.5));
	    float normalizedDistance = distance/sizeDist;
	    // Stick to the front
	    float stickOutEffect = normalizedDistance ;
	    // Stick to the back
	    float stickInEffect = -normalizedDistance ;
	    float stickEffect = mix(stickOutEffect,stickInEffect, u_direction);
	    pos.z += stickEffect * u_offset;
	    gl_Position =
	    projectionMatrix *
	    modelViewMatrix *
	    vec4(pos, 1.0);
    }
}