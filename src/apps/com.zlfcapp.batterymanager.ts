import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.9245',
            top: 'width * 0.0401',
          },
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'FrameLayout[childCount=4] >2 @RelativeLayout[childCount=3] > RelativeLayout > ProgressBar[childCount=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/89ad488c-2bcb-4f78-b7ba-ccb5335042cc',
          snapshotUrls: 'https://i.gkd.li/i/15220546',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -2 @View > Image[text=""][visibleToUser=true][childCount=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/f41a31f3-5ddd-44a5-b450-a6678f551328',
          snapshotUrls: 'https://i.gkd.li/i/15220517',
        },
      ],
    },
  ],
});
