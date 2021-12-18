const express = require("express");

const Lecture = require("../models/lecture.model");

async function getlect(id) {
  try {
    const lecture = await Lecture.find({ _id: id }).lean().exec();

    console.log(lecture);
    return lecture;
  } catch (e) {
    console.log(e);
  }
}

module.exports = getlect;

