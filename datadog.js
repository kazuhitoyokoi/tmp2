  (function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/ap1/v4/datadog-rum.js','DD_RUM')
  window.DD_RUM.onReady(function() {
    window.DD_RUM.init({
      clientToken: 'pubf0ffccac797264d3b7dfdfefafa75d56',
      applicationId: '24e6a32d-9a31-427b-a3a0-d05e0f06d32a',
      site: 'ap1.datadoghq.com',
      service: 'node-red',
      env: 'node-red',
      // Specify a version number to identify the deployed version of your application in Datadog 
      // version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });

    window.DD_RUM.startSessionReplayRecording();
  })
