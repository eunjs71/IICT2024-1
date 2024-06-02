export const indexHTML = `<html lang="en">
  <head>
    ...
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    ...
  </head>
  <body>
    <main>
    </main>
    <script> const { createClient } = supabase </script>
    <script src="sketch.js"></script>
  </body>
</html>`
export const sketchJS = `function setup() {
    createCanvas(400, 400);
    supabase = createClient(
      "{PROJECT_URL}",
      "{API_KEY}"
    );
  }
  
  function draw() {
    background(220);
  }
  function mouseClicked(){
    uploadPost()
  }
  
  async function uploadPost(){
    const { error } = await supabase
    .from('post')
    .insert({ content: '11111' })
    if (error) {
      console.error("Error uploading post:", error);
    } else {
      console.log("post uploaded successfully:");
    }
  }`

export const sketchJS_loadDB = `let posts;

async function setup() {
  createCanvas(400, 400);
  supabase = createClient(
    "{PROJECT_URL}",
    "{API_KEY}"
  );
  const { data, error } = await supabase
  .from('post')
  .select()
  if (error) {
    console.error("Error fetching post:", error);
  } else {
    console.log("post fetched successfully:");
    post = data
    console.log(post)
  } 
}

function draw() {
  background(220);
}`