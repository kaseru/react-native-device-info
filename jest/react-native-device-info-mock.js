/* eslint-disable no-undef -- jest is not defined and cannot be */
const asyncFn = (response) => () => jest.fn(() => Promise.resolve(response));
const syncFn = (response) => () => jest.fn(() => response);
const makeFns = (response) => [asyncFn(response), syncFn(response)];

const [stringFnAsync, stringFnSync] = makeFns('unknown');
const [numberFnAsync, numberFnSync] = makeFns(-1);
const [arrayFnAsync, arrayFnSync] = makeFns([]);
const [booleanFnAsync, booleanFnSync] = makeFns(false);
const [objectFnAsync, objectFnSync] = makeFns({});

const numberAsyncHookResultHook = () => jest.fn(() => ({ loading: false, result: -1 }));
const booleanAsyncHookResultHook = () => jest.fn(() => ({ loading: false, result: false }));
const stringAsyncHookResultHook = () => jest.fn(() => ({ loading: false, result: 'unknown' }));

const diMock = {
  getAndroidId: stringFnAsync(),
  getAndroidIdSync: stringFnSync(),
  getApiLevel: numberFnAsync(),
  getApiLevelSync: numberFnSync(),
  getAvailableLocationProviders: objectFnAsync(),
  getAvailableLocationProvidersSync: objectFnSync(),
  getBaseOs: stringFnAsync(),
  getBaseOsSync: stringFnSync(),
  getBatteryLevel: numberFnAsync(),
  getBatteryLevelSync: numberFnSync(),
  getBootloader: stringFnAsync(),
  getBootloaderSync: stringFnSync(),
  getBuildId: stringFnAsync(),
  getBuildIdSync: stringFnSync(),
  getCarrier: stringFnAsync(),
  getCarrierSync: stringFnSync(),
  getCodename: stringFnAsync(),
  getCodenameSync: stringFnSync(),
  getDevice: stringFnAsync(),
  getDeviceSync: stringFnSync(),
  getDeviceName: stringFnAsync(),
  getDeviceNameSync: stringFnSync(),
  getDeviceToken: stringFnAsync(),
  getDisplay: stringFnAsync(),
  getDisplaySync: stringFnSync(),
  getFingerprint: stringFnAsync(),
  getFingerprintSync: stringFnSync(),
  getFirstInstallTime: numberFnAsync(),
  getFirstInstallTimeSync: numberFnSync(),
  getFontScale: numberFnAsync(),
  getFontScaleSync: numberFnSync(),
  getFreeDiskStorage: numberFnAsync(),
  getFreeDiskStorageOld: numberFnAsync(),
  getFreeDiskStorageSync: numberFnSync(),
  getFreeDiskStorageOldSync: numberFnSync(),
  getHardware: stringFnAsync(),
  getHardwareSync: stringFnSync(),
  getHost: stringFnAsync(),
  getHostSync: stringFnSync(),
  getIncremental: stringFnAsync(),
  getIncrementalSync: stringFnSync(),
  getInstallerPackageName: stringFnAsync(),
  getInstallerPackageNameSync: stringFnSync(),
  getInstallReferrer: stringFnAsync(),
  getInstallReferrerSync: stringFnSync(),
  getInstanceId: stringFnAsync(),
  getInstanceIdSync: stringFnSync(),
  getIpAddress: stringFnAsync(),
  getIpAddressSync: stringFnSync(),
  getLastUpdateTime: numberFnAsync(),
  getLastUpdateTimeSync: numberFnSync(),
  getMacAddress: stringFnAsync(),
  getMacAddressSync: stringFnSync(),
  getMaxMemory: numberFnAsync(),
  getMaxMemorySync: numberFnSync(),
  getPhoneNumber: stringFnAsync(),
  getPhoneNumberSync: stringFnSync(),
  getPreviewSdkInt: numberFnAsync(),
  getPreviewSdkIntSync: numberFnSync(),
  getProduct: stringFnAsync(),
  getProductSync: stringFnSync(),
  getSecurityPatch: stringFnAsync(),
  getSecurityPatchSync: stringFnSync(),
  getSerialNumber: stringFnAsync(),
  getSerialNumberSync: stringFnSync(),
  getSystemAvailableFeatures: arrayFnAsync(),
  getSystemAvailableFeaturesSync: arrayFnSync(),
  getTags: stringFnAsync(),
  getTagsSync: stringFnSync(),
  getTotalDiskCapacity: numberFnAsync(),
  getTotalDiskCapacityOld: numberFnAsync(),
  getTotalDiskCapacitySync: numberFnSync(),
  getTotalDiskCapacityOldSync: numberFnSync(),
  getTotalMemory: numberFnAsync(),
  getTotalMemorySync: numberFnSync(),
  getType: stringFnAsync(),
  getTypeSync: stringFnSync(),
  getUsedMemory: numberFnAsync(),
  getUsedMemorySync: numberFnSync(),
  getUserAgent: stringFnAsync(),
  getUserAgentSync: stringFnSync(),
  hasDynamicIsland: booleanFnSync(),
  hasSystemFeature: booleanFnAsync(),
  hasSystemFeatureSync: booleanFnSync(),
  hasGms: booleanFnAsync(),
  hasGmsSync: booleanFnSync(),
  hasHms: booleanFnAsync(),
  hasHmsSync: booleanFnSync(),
  isAirplaneMode: booleanFnAsync(),
  isAirplaneModeSync: booleanFnSync(),
  isBatteryCharging: booleanFnAsync(),
  isBatteryChargingSync: booleanFnSync(),
  isCameraPresent: booleanFnSync(),
  isCameraPresentSync: booleanFnSync(),
  isEmulator: booleanFnAsync(),
  isEmulatorSync: booleanFnSync(),
  isHeadphonesConnected: booleanFnAsync(),
  isHeadphonesConnectedSync: booleanFnSync(),
  isLocationEnabled: booleanFnAsync(),
  isLocationEnabledSync: booleanFnSync(),
  isPinOrFingerprintSet: booleanFnAsync(),
  isPinOrFingerprintSetSync: booleanFnSync(),
  syncUniqueId: stringFnAsync(),
  getApplicationName: stringFnSync(),
  getBrand: stringFnSync(),
  getBuildNumber: stringFnSync(),
  getBundleId: stringFnSync(),
  getDeviceId: stringFnSync(),
  getDeviceType: stringFnSync(),
  getDeviceTypeSync: stringFnSync(),
  getManufacturer: stringFnAsync(),
  getManufacturerSync: stringFnSync(),
  getModel: stringFnSync(),
  getPowerState: objectFnAsync(),
  getPowerStateSync: objectFnSync(),
  getReadableVersion: stringFnSync(),
  getSystemName: stringFnSync(),
  getSystemVersion: stringFnSync(),
  getUniqueId: stringFnAsync(),
  getUniqueIdSync: stringFnSync(),
  getVersion: stringFnSync(),
  getBrightness: numberFnAsync(),
  getBrightnessSync: numberFnSync(),
  hasNotch: booleanFnSync(),
  isDisplayZoomed: booleanFnSync(),  
  isLandscape: booleanFnAsync(),
  isLandscapeSync: booleanFnSync(),
  isMouseConnected: booleanFnAsync(),
  isMouseConnectedSync: booleanFnSync(),
  isKeyboardConnected: booleanFnAsync(),
  isKeyboardConnectedSync: booleanFnSync(),
  isTabletMode: booleanFnAsync(),
  isTablet: booleanFnSync(),
  supported32BitAbis: arrayFnAsync(),
  supported32BitAbisSync: arrayFnSync(),
  supported64BitAbis: arrayFnAsync(),
  supported64BitAbisSync: arrayFnSync(),
  supportedAbis: arrayFnAsync(),
  supportedAbisSync: arrayFnSync(),
  useBatteryLevel: numberFnSync(),
  useBatteryLevelIsLow: numberFnSync(),
  usePowerState: objectFnSync(),
  useIsHeadphonesConnected: booleanAsyncHookResultHook(),
  useFirstInstallTime: numberAsyncHookResultHook(),
  useDeviceName: stringAsyncHookResultHook(),
  useHasSystemFeature: booleanAsyncHookResultHook(),
  useIsEmulator: booleanAsyncHookResultHook(),
  useManufacturer: stringAsyncHookResultHook(),
  useBrightness: numberFnSync(),
};

module.exports = diMock;
