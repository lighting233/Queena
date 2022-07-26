import Taro, { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import dayjs from 'dayjs'

import Love from '../../components/Love/Love'

import './index.scss'

const WeekName = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
}

const Index: FC = () => {

  setTimeout(() => {
    Taro.redirectTo({
      url: '/pages/coupons/list/list',
    });
  }, 4100)

  console.log('To Queena:')
  console.log('    七夕快乐哟~ ')
  console.log('       by: Light')

  const getName = () => {
    if (dayjs().startOf('day').valueOf() === dayjs('2022-08-04').valueOf()) {
      return '七夕'
    }
    return `周${WeekName[dayjs().day()]}`
  }

  return (
    <View className='index'>
      <Love />
      <View className='loading-text'>Queena, {getName()}快乐哟~</View>
    </View>
  )
}

export default Index;
