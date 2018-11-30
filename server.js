const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let fonts = [];
let saved = [];
let id = 0;


https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBJlUfLH58MJnqXQlyrnCCoIeihDcqVsfs&sort=popularity


app.post('/api/saved', (req, res) => {
  id = id + 1;
  let font = {id:id, font: req.body.font};
  saved.push(font);
  res.send(font);
});

app.get('/api/saved', (req, res) => {
  res.send(saved);
});

app.get('/api/fonts', (req, res) => {
  if (fonts.length == 0) {
    
  }
  res.send(fonts);
});

app.get('/api/font', (req, res) => {

});




let items = [];
let id = 0;

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.post('/api/items', (req, res) => {
  id = id + 1;
  let item = {id:id, text:req.body.text, completed: req.body.completed, priority: req.body.priority};
  items.push(item);
  res.send(item);
});

// app.put('/api/items/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let itemsMap = items.map(item => { return item.id; });
//   let index = itemsMap.indexOf(id);
//   let item = items[index];
//   item.completed = req.body.completed;
//   item.text = req.body.text;
//   res.send(item);
// });

app.put('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = items.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = items[index];
  item.completed = req.body.completed;
  item.text = req.body.text;
  item.priority = req.body.priority; // make sure this works
  console.log(item.priority);

  // handle drag and drop re-ordering
  if (req.body.orderChange) {
    let indexTarget = itemsMap.indexOf(req.body.orderTarget);
    items.splice(index,1);
    items.splice(indexTarget,0,item);
  }
  res.send(item);
});

app.delete('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = items.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  items.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))