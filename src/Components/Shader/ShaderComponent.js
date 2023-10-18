import ShadertoyReact from 'shadertoy-react';
import ReactDOM from "react-dom";
import React from "react";

const fragmentShader = `
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / iResolution.xy;
    fragColor = vec4(uv,0.5+0.5*sin(iTime),1.0);
}
`;

export default () => <ShadertoyReact fs={fragmentShader} />;


/*
const shaderLogic = `
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / iResolution.xy;
    fragColor = vec4(uv,0.5+0.5*sin(iTime),1.0);
}
`;

const ShaderComponent = () => {
    return (
        <ShadertoyReact
        shaderLogic={shaderLogic}
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        />
    );
    };

export default ShaderComponent;
*/