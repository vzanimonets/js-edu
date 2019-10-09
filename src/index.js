/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 }
) {
  if (focus === "family") {
    // console.log(knowsProgramming);
    //if (knowsProgramming) return 200;
    if (!config.top_peformance) {
      if (!knowsProgramming) return 650;
      return 400;
    }
    if (!knowsProgramming) return 325;
    return 200;
  } else if (focus === "friends") {
    if (!config.top_peformance) {
      if (!knowsProgramming) return 325;
      return 200;
    }
    if (!knowsProgramming) return 130;
    return 80;
  } else if (focus === "normal_life") {
    if (!config.top_peformance) {
      if (!knowsProgramming) return 163;
      return 100;
    }
    if (!config.family && !config.friends) return 27;
    if (!knowsProgramming) return 65;
    return 40;
  } else if (focus === "profession") {
    if (!config.top_peformance) {
      if (!knowsProgramming) return 65;
      return 40;
    }
    if (!config.family && !config.friends) return 20;
    if (!knowsProgramming) return 44;
    return 27;
  } else if (focus === "carrier") {
    if (!config.top_peformance) {
      if (!knowsProgramming) return 44;
      return 27;
    }
    if (!config.family && !config.friends) return 15;
    if (!knowsProgramming) return 33;
    return 20;
  } else if (focus === "top_peformance") {
    if (!config.family && !config.friends) return 12;
    return 14;
  }
};
