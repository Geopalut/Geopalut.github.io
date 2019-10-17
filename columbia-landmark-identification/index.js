<!doctype html>

<head>
  <title>Your title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<style>
  .pred-container {
    margin-bottom: 20px;
  }

  .pred-container > div {
    display: inline-block;
    margin-right: 20px;
    vertical-align: top;
  }

  .row {
    display: table-row;
  }
  .cell {
    display: table-cell;
    padding-right: 20px;
  }

  #file-container {
    margin-bottom: 20px;
  }
</style>

<body>
  <div class="tfjs-example-container">
    <section class='title-area'>
      <h1>TensorFlow.js: Using a Keras model in the browser</h1>
    </section>

    <section>
      <p class='section-head'>Description</p>
      <p>
        This file is based on <a>https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet</a>.
      </p>
    </section>

    <section>
      <p class='section-head'>Status</p>
      <div id="status"></div>
    </section>

    <section>
      <p class='section-head'>Model Output</p>

      <div id="file-container" style="display: none">
        Upload an image: <input type="file" id="files" name="files[]" multiple />
      </div>

      <div id="predictions"></div>

      <img style="display: none" id="Scholars' Lion" src="lion_example.jpg" width=300 height=300 />
    </section>

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
    <script src="index.js"></script>
  </div>
</body>