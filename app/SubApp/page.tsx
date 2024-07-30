'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import '@/styles/global.css'
import styles from './styles.module.css';

let PalletPromise = null;

export default function Page() {
  //strict mode
    function forward() {
      window.history.forward();
    }
    function back() {
      window.history.back();
    }

    useEffect( () => {
      if ( PalletPromise === null ) {
        PalletPromise = import( '../../PalletEngine/module' );
        PalletPromise.then( pallet => {
          //'./mario_animacion.glb'
          pallet._module.loadGLTF( './daft_punk_in_end_of_line_club.glb', gltf => {
            console.log( gltf );
            gltf.scene.position.set( 0, 0.01, 0);
            gltf.scene.scale.set( 0.03, 0.03, 0.03 );
            const mixer = new THREE.AnimationMixer( gltf.scene );
            // ** findout bounding box at load frame
            const action = mixer.clipAction( gltf.animations[0] );
            action.play();

            const bounding = new THREE.Box3();
            gltf.scene.traverse( object => {
              if ( object.isMesh ) {
                object.castShadow = true;
                object.receiveShadow = true;

                console.log( object.geometry.boundingBox );
                if ( bounding.isEmpty ) bounding.copy( object.geometry.boundingBox );
                bounding.containsBox( object.geometry.boundingBox );
              }
            } );
            console.log( bounding );
            const boxSize = new THREE.Vector3();
            bounding.getSize( boxSize );
            console.log( boxSize );
  
            //gltf.scene.updateWorldMatrix( true, true );
            //const box3 = new THREE.Box3();
            //box3.setFromObject( gltf.scene, true );
            // gltf.scene.traverse( object => {
            //   if ( object.isMesh ) {
            //     for ( let i = 0; i < object.geometry.getAttribute( 'position' ).count; i++ ) {
            //       const p = new THREE.Vector3();
            //       object.getVertexPosition( i, p );
            //       box3.expandByPoint( p );
            //     }
            //   }
            // } );
            // const box3Helper = new THREE.Box3Helper( box3, 0x00ff00 );
            //pallet._module.sceneGraph.add( box3Helper );
            gltf.scene.userData.mixer = mixer;
            gltf.scene.userData.action = action;
            gltf.scene.userData.updator = pallet._module.addUpdator( dt => {
              //box3Helper.box.makeEmpty();
              //box3Helper.box.setFromObject( gltf.scene, true );
              mixer.update( dt );
            }, gltf.scene );            
          } );
          pallet._module.createVREnvironment();
        } );
      }

    } /*, [] */ );

    const styleText = {
      width: "100%",
      height: "100%",
      background: "#3c3c3c"
    }


    return (
    <div style={styleText}>
      <div>
        <canvas style={styleText} className="view"></canvas>
      </div>
    </div> );
}