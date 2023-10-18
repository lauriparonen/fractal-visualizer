import ShadertoyReact from 'shadertoy-react';
import React, { useState } from "react";
import { shaderCode } from './ShaderScript';

const fragmentShader = shaderCode;

export default () => <ShadertoyReact fs={fragmentShader} />;
