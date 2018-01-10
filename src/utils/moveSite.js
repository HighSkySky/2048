export default function (target, list) {
  switch (target) {
    case 0:
      console.log("没滑动");
      break;
    case 1:
      console.log("向上");
      break;
    case 2:
      console.log("向下");
      break;
    case 3:
      console.log("向左");
      break;
    case 4:
      console.log("向右");
      return move(list);
    default:
  }

  return list;
}

function move(list) {
  let newList = [];

  return list;
}