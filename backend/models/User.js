// // const mongoose = require("mongoose");

// // const bcrypt = require("bcryptjs");

// // const UserSchema = new mongoose.Schema(
// //     {
// //         fullName: {type:String, required:true},
// //         email: {type:String, required:true, unique:true},
// //         password: {type:String, required:true},
// //         profileImageUrl: {type:String, default:null},
// //     },
// //     {timestamps:true}
// // );

// // //Hash password before saving 
// // UserSchema.pre("save", async function (next) {
// //     if (!this.isModified("password")) return next();
// //     this.password = await bcrypt.hash(this.password, 10);
// //     next();
// // });

// // //compare passwords
// // UserSchema.methods.comparePassword = async function (candidatePassword) {
// //     return await bcrypt.compare(candidatePassword, this.password);
// // };

// // module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   fullName: String,
//   email: { type: String, unique: true },
//   password: String,
//   profileImageUrl: String,
//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user", // All new users are regular users
//   }
// });

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Password comparison method
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        fullName: {type:String, required:true},
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true},
        profileImageUrl: {type:String, default:null},
    },
    {timestamps:true}
);

//Hash password before saving 
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);