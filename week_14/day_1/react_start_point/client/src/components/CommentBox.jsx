var React = require('react');

var CommentForm = require('./commentform');
var CommentList = require('./commentlist');

var sampleData = [
{id: 1, author: "Alan Russell", text: "Hiya pal"}, 
{id: 2, author: "Some other guy", text: "Cuntybaws"},
{id: 3, author: "One more", text: "U sukk lol"},
]

var CommentBox = React.createClass({

  getInitialState: function() {
    return { data: sampleData }
  },

  handleCommentSubmit: function( comment ) {
    comment.id = Date.now();

    var newComments = this.state.data.concat([comment]);

    this.setState({data: newComments})
  },

  render: function() {
    return (
      <div className="comment-box">
        <h2>Add a Comment</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList data={this.state.data}/>
      </div>
    )
  }
})

module.exports = CommentBox;