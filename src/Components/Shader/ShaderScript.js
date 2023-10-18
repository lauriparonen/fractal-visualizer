export const shaderCode = `
vec3 palette( in float t )
{
    // gotten from http://dev.thi.ng/gradients/
    vec3 a = vec3(0.678, -1.502, 0.388);
    vec3 b = vec3(-0.252, 0.054, 0.450);
    vec3 c = vec3(-2.892, 2.168, 0.930);
    vec3 d = vec3(-1.252, -0.918, -1.582);
    
    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;  
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 2.0; i++) {
    
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + iTime/4.);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = 0.02 / d;
        //col *= d;

        finalColor += col * d;
    
    }
    
    fragColor = vec4(finalColor, 1.0);
}
`;
