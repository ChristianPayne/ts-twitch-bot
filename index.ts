require('dotenv').config();
// Import the types from comfy.js package.
import {
  ComfyJSInstance
} from "comfy.js";

// Import the instance of the bot.
const ComfyJS : ComfyJSInstance = require('comfy.js');

// Set what channel you want to connect to.
const twitchChannel = process.env.CHANNEL ?? "";
// Set what your OAuth is for connecting.
const twitchOAuth = process.env.OAUTH ?? "";

ComfyJS.onChat = ( user, message, flags, self ) => {
  if ( self ) return;
  console.log( `${user}: ${message}` );
}

// Set the onCommand function to be called when a command is sent.
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    console.log( "!test was typed in chat" );
    ComfyJS.Say( "Hello there.", twitchChannel );
  }
}

// Start the bot.
ComfyJS.Init( twitchChannel, twitchOAuth );