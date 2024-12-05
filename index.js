// let clientAlreadyLoaded = false;

// Zonka Feedback Embed Script as an NPM Module

function loadZonkaFeedback(workspaceId = "671b43c779224c1efca88f58") {
  let scriptUrl = `https://us1.zonkasurvey.com/api/v1/embedjs/${workspaceId}`;
  if (document.getElementById("zfEmbedScript")) {
      console.warn("Zonka Feedback script is already loaded.");
      return;
  }

  const script = document.createElement("script");
  script.id = "zfEmbedScript";
  script.src = scriptUrl;
  script.async = true;

  script.onload = () => {
      console.log("Zonka Feedback script loaded successfully.");
  };

  script.onerror = () => {
      console.error("Failed to load Zonka Feedback script.");
  };

  document.head.appendChild(script);
}

// window._zfQueue = window._zfQueue || [];
// window._zf = function() {
//   if (!clientAlreadyLoaded) {
//       loadRefinerClient();
//   }
//   _zfQueue.push(arguments);
// }

// window._zf('setInstallationMethod', 'npm');

module.exports = { loadZonkaFeedback };

// module.exports = window._zf;