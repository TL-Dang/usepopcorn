import { useEffect } from "react";

export function useKey(key, action) {
   useEffect(
      function () {
        function callback(e) {
          if (e.code.toLowerCase() === key.toLowerCase()) {
            action();
          }
        }
  
        document.addEventListener('keyup', callback);
  
        //cleanup function to remove the callback function so it does not initiate more than once
        return function () {
          document.removeEventListener('keyup', callback);
        };
      },
      [action, key]
    );
}