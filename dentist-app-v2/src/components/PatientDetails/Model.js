import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
    const { scene } = useGLTF("./human_teeth.glb"); // Düzgün dosya yolu

    return (
        <primitive object={scene} scale={1.5} dispose={null} /> // dispose={null} ekleyin
    );
};

export default Model;
