const mongoose = require('mongoose');
const validator = require('validator');
mongoose
  .connect('')
  .then(() => console.log('connection successfull...'))
  .catch((err) => console.log(err));
// schema
const playlistschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['frontend', 'backend', 'database'],
  },
  work: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('work is not in negative');
      }
    },
    // validate: {
    //   validator: function (value) {
    //     return value.length < 0;
    //   },
    //   message: "not work",
    // },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is inValid');
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// model
const Playlist = new mongoose.model('Playlist', playlistschema);
//creat and insert
const creatDocument = async () => {
  try {
    // const jsPlaylist = new Playlist({
    //   name: "JAVASCRIPT",
    //   ctype: "Front End",
    //   work: 1,
    //   author: "Ram",
    //   active: true,
    // });
    // const reactPlaylist = new Playlist({
    //   name: "react",
    //   ctype: "Front End",
    //   work: 2,
    //   author: "Rahul",
    //   active: true,
    // });
    // const nodePlaylist = new Playlist({
    //   name: "Node JS",
    //   ctype: "Back End",
    //   work: 3,
    //   author: "Rohan",
    //   active: true,
    // });
    const mongoPlaylist = new Playlist({
      name: 'mongoosejs',
      ctype: 'Database',
      work: 6,
      author: 'disha',
      email: 'disha@gmail.com',
      active: true,
    });
    const result = await Playlist.insertMany([mongoPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
creatDocument();

const getDocument = async () => {
  try {
    const result = await Playlist.find({
      author: 'disha',
      // ctype: { $in: ["Back End"] },
    }) //greaterthen $gt,greterthen equla $gte, lessthen $lt
      .select({
        name: 1,
      })
      .sort({ name: +1 });
    // .countDocuments()
    // .limit(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// getDocument();

// update the Document
const updateDocument = async (_id) => {
  try {
    const result = await Playlist.updateOne(
      { _id },
      {
        $set: {
          name: 'Javascript',
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// updateDocument("659eb46f81163ee55c40b23e");

// const updateDocument = async (_id) => {
//   try {
//     const result = await Playlist.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           name: "Javascript",
//         },
//       },
//       {
//         new: true,
//         usefindAndModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("659eb46f81163ee55c40b23e");

// delete the document
// const deleteDocument = async (_id) => {
//   try {
//     const result = await Playlist.deleteOne({ _id: _id });
//     console.log(result);
//   } catch (err) {
//     conosole.log(err);
//   }
// };
// deleteDocument("659eb46f81163ee55c40b23f");
const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    conosole.log(err);
  }
};
// deleteDocument("659eb46f81163ee55c40b23e");
