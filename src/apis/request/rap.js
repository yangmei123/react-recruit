const rap = {
  config: {
    rapURL: '',
    rapMode: 0,
    rapWhiteList: [],
    rapBlackList: []
  },
  initConfig(config) {
    this.config = {
      ...this.config,
      ...config
    };
  },
  isRap(url = '') {
    const { rapMode, rapBlackList, rapWhiteList } = this.config;
    if (rapMode === 1) { // intercept all requests
      return true;
    } else if (rapMode === 2 || rapMode === 3) { // black/white list mode
      const list = rapMode === 2 ? rapBlackList : rapWhiteList;
      return list.find( (item) => {
        return item === url;
      }); 
    }
    return false;
  },
  onPreprocessed(configInfo) {
    const config = configInfo;
    const { rapURL } = this.config;
    if (this.isRap(config.url)) {
      config.url = config.url.replace(config.baseURL, rapURL);
      config.baseURL = rapURL;
    }
    return config;
  },
  onRejected(error) {
    return Promise.reject(error);
  }
};

export default rap;
