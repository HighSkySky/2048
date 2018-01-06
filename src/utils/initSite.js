// 确认位置为空
function check(lists, index) {
  return !!lists[index];
}


export default function (lists) {
  const max = Math.max(...lists);
  const newValue = max >= 16 ? 4 : 2;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (check(lists, newIndex));

  return {
    index: newIndex,
    value: newValue
  }
}