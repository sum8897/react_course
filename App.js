const heading1 = React.createElement('h6', { id: 'heading1', class: 'heading1' }, 'Put all js code in separate js file');
const root1 = ReactDOM.createRoot(document.getElementById('renderjs'));
root1.render(heading1);


// const heading = React.createElement('h2',{},'Created first h2 tag in react project..');
// const root1 = ReactDOM.createRoot(document.getElementById('renderData'));
// root1.render(heading);


/** 
 * <div class="parent">
 *      <div class="child">
 *          <p class="paragraph">paragraph in child with p tag</p>
 *           <div class="children">
 *           <h1>Data found in chilred div in h1 tag</h1>
 *            </div>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        React.createElement('p', { class: 'paragraph' }, 'paragraph in child with p tag'),
        React.createElement('div', { class: 'children' },
          [ 
            React.createElement('h1', {}, 'Data found in chilred div in h1 tag'),
            React.createElement('h2', {}, 'Data found in chilred div in h3 tag'),
            React.createElement('h3', {}, 'Data found in chilred div in h3 tag'),
            React.createElement('h4', {}, 'Data found in chilred div in h4 tag')
          ]          
            ),
            React.createElement('h1', {}, 'Data found in chilred div in h1 tag')
    ),
)

const root3 = ReactDOM.createRoot(document.getElementById('manydiv'));
root3.render(parent);
