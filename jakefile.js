// Build automation, the code builds itself, don't rely on ide or the browser, essential for continuous integration.

// default task to catch and test issues
task("default", [], function(){
  console.log("default");
});

desc("Example");
task("example", ["dependency"],function() {
  console.log("example task");
});

// It runs this dependency before the task
task("dependency", function( ) {
  console.log("dependency");
});
