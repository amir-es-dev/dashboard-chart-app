export const HandleColor = (chart) => {
  const colorArr = [
    "#5B8FF9",
    "#5AD8A6",
    "#5D7092",
    "#F6BD16",
    "#6F5EF9",
    "#6DC8EC",
    "#945FB9",
    "#FF9845",
    "#1E9493",
    "#FF99C3",
    "#CDDDFD",
    "#CDF3E4",
    "#CED4DE",
    "#FCEBB9",
    "#D3CEFD",
    "#D3EEF9",
    "#DECFEA",
    "#FFE0C7",
    "#BBDEDE",
    "#FFE0ED",
  ];
  const color = colorArr.map((color, i) =>
    chart?.data[i]?.color ? chart?.data[i]?.color : color
  );
  return color;
};
