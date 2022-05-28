$(function () {
  var data = [
    {
      action: "type",
      strings: ["npm install^200 -^100g^50 kinkyu^300"],
      output:
        '<span class="grey">+ kinkyu@0.10.2 <br />added 13 packages from 4 contributors in 0.03s</span><br>&nbsp;',
      postDelay: 500,
    },
    {
      action: "type",
      strings: ["kinkyu^200 --intro^400"],
      output: $(".intro-run-output").html(),
      postDelay: 2500,
    },
    {
      action: "type",
      strings: ["kinkyu^200 --more^300"],
      output:
        "<br>&nbsp;&nbsp;<a class='link aboutme' href='https://kinqq.com/blog/aboutme' target='_blank'>More about me!</a><br /> <br />",
      postDelay: 1000,
    },
  ];
  runScripts(data, 0);
});

function runScripts(data, pos) {
  var prompt = $(".prompt"),
    script = data[pos];
  if (script.clear === true) {
    $(".history").html("");
  }
  switch (script.action) {
    case "type":
      // cleanup for next execution
      prompt.removeData();
      $(".typed-cursor").text("");
      prompt.typed({
        strings: script.strings,
        typeSpeed: 30,
        callback: function () {
          var history = $(".history").html();
          history = history ? [history] : [];
          history.push("$ " + prompt.text());
          if (script.output) {
            history.push(script.output);
            prompt.html("");
            if (history) {
              console.log(history);
              $(".history").html(history.join("<br class='by script'>"));
            }
          }
          // scroll to bottom of screen
          $("section.terminal").scrollTop($("section.terminal").height());
          // Run next script
          pos++;
          if (pos < data.length) {
            setTimeout(function () {
              runScripts(data, pos);
            }, script.postDelay || 1000);
          }
        },
      });
      break;
    case "view":
      break;
  }
}
