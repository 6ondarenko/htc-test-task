export default {
  install(Vue) {
    Vue.filter("userShortName", user => {
      if (!user || !user.name || !user.secondName) return "";
      return `${user.name.charAt(0).toUpperCase() +
        user.name.slice(1)} ${user.secondName.charAt(0).toUpperCase()}.`;
    });
  }
};
