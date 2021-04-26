Html Webpack Plugin:
<pre>
  Error: webpack://mern-boiler/./template.js?./node_modules/html-webpack-plugin/lib/loader.js:6
    body: body
          ^
  ReferenceError: body is not defined
  
  - loader.js:6 eval
    [template.js?.]/[html-webpack-plugin]/lib/loader.js:6:9
  
  - template.js:20 Object../node_modules/html-webpack-plugin/lib/loader.js!./template.js
    C:/Users/darkg/programming_stuff/opportunities/midnightTest/template.js:20:1
  
  - template.js:106 
    C:/Users/darkg/programming_stuff/opportunities/midnightTest/template.js:106:96
  
  - template.js:109 
    C:/Users/darkg/programming_stuff/opportunities/midnightTest/template.js:109:12
  
  - index.js:142 HtmlWebpackPlugin.evaluateCompilationResult
    [midnightTest]/[html-webpack-plugin]/index.js:142:28
  
  - index.js:324 
    [midnightTest]/[html-webpack-plugin]/index.js:324:26
  
  - runMicrotasks
  
  - task_queues.js:97 processTicksAndRejections
    internal/process/task_queues.js:97:5
  
  - async Promise.all
  
</pre>