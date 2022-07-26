import dayjs from "dayjs";

import { ICouponsStatus, IOperationType } from "../typings";

export const InitCoupons = [
  {
    id: new Date().getTime() - 1,
    name: "奶茶卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "体验券",
    desc: "任性就要喝一杯奶茶，一天最多使用一次哦~",
    count: 3,
    amount: 3,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() - 2,
    name: "陪伴卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "体验券",
    desc: "陪你打游戏，听歌，聊视频，看剧等等都可以，不少于1小时~",
    count: 1,
    amount: 1,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
];

export const QiXiCoupons = [
  {
    id: new Date().getTime(),
    name: "畅玩卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(6, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "可以连续一人玩12小时游戏，不被打扰哦~",
    count: 2,
    amount: 2,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 1,
    name: "零食卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(6, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "给宝宝买零食，每次不少于100元",
    count: 3,
    amount: 3,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 2,
    name: "按摩服务",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(6, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "任提要求，每次不少于10分钟哦~",
    count: 2,
    amount: 2,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 3,
    name: "和好卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(6, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "使用此券，忘掉不开心。拥抱言和~",
    count: 3,
    amount: 3,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 4,
    name: "做饭服务",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(6, "months").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "咳咳，只会煎牛排和煮面条...",
    count: 1,
    amount: 1,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 5,
    name: "逛街服务",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "year").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "可去指定商场陪逛+埋单 0.0",
    count: 1,
    amount: 1,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 6,
    name: "拒绝卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "year").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "可拒绝当下的任意一件事~",
    count: 1,
    amount: 1,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 7,
    name: "出轨卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "year").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "呸！想啥呢，不许用！",
    count: 0,
    amount: 0,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
  {
    id: new Date().getTime() + 8,
    name: "女王卡",
    startTime: dayjs().format("YYYY-MM-DD"),
    endTime: dayjs().add(1, "year").format("YYYY-MM-DD"),
    status: ICouponsStatus.ON,
    tag: "七夕礼",
    desc: "狗狗，24小时内听你派遣^.-",
    count: 1,
    amount: 1,
    logs: [
      {
        time: dayjs(),
        type: IOperationType.CREATE,
      },
    ],
  },
];

export const OperationName = {
  0: "作废",
  1: "创建",
  2: "过期",
  3: "使用",
};
