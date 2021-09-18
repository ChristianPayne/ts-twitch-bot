import {
  ComfyJSInstance
} from "comfy.js";

const ComfyJS : ComfyJSInstance = require('comfy.js');
const twitchChannel = 'chrisgriffin522';


ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( flags.broadcaster && command === "test" ) {
    console.log( "!test was typed in chat" );
  }
}

ComfyJS.Init( twitchChannel );