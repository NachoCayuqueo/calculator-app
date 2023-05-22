const switchPosition = document.querySelector(".input-switch");

const onChangeTheme = (optionTheme) => {
  switch (optionTheme) {
    case "1":
      document.documentElement.className = "theme1";
      break;
    case "2":
      document.documentElement.className = "theme2";
      break;
    case "3":
      document.documentElement.className = "theme3";
      break;
    default:
      break;
  }
};

onChangeTheme(switchPosition.value);
