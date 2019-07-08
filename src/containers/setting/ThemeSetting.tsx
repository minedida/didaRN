import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { List } from "react-native-paper";
import { material } from 'react-native-typography'
import { ButtonContainer, NavigationBar, Space, Icon } from "../../components";
import { d, t } from "../../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../store/AppStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemView: {
    padding: d(18),
    alignItems: 'center',

  },
  colorsView: {
    width: d(56),
    height: d(56),
    borderRadius: d(12),
    justifyContent:'center',
    alignItems:'center'
  },
  checkView: {
    position: "absolute",
    bottom: d(4),
    right: d(4),
    backgroundColor: '#fff',
    width: d(14),
    height: d(14),
    borderRadius: d(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  lockView: {
    width: d(40),
    height: d(40),
    borderRadius: d(20),
    backgroundColor: '#b3b3b3',
    justifyContent:'center',
    alignItems:'center'
  }
})
const SolidColorTheme = [
  {
    type: 'solid-color',
    color: '#607edf',
    title: '官方蓝',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#212121',
    title: '夜间',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#000',
    title: '纯黑',
    active: false,
    clocked: true
  },
  {
    type: 'solid-color',
    color: '#fe7797',
    title: '粉色',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#272a34',
    title: '黑色',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#04ce91',
    title: '绿色',
    active: true,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#7d7f85',
    title: '灰色',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#f9bf13',
    title: '黄色',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#f0f0f0',
    title: '白色',
    active: false,
    clocked: true
  }
]

const configs: Array<any> = SolidColorTheme

type Props = {
  app: AppStore
}

@inject('app')
@observer
class ThemeSetting extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <NavigationBar title={'主题'}/>
      <List.Subheader>
        纯色主题</List.Subheader>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {configs.map(v => <SolidColorItem key={v.title.toString()} item={v}/>)}
      </View>
    </View>
  }
}

type ISolidColorItemProps = {
  item: any,
  app?: AppStore
}

@inject('app')
@observer
class SolidColorItem extends React.Component<ISolidColorItemProps> {
  onItemPress(item: any) {
    if (item.clocked) {
      alert('会员专享，请充值')
      return
    }
    this.props.app!.changeThemeColor(item.color);
    alert(`已为你换上${item.title}主题`)
  }

  renderCheckView() {
    const { item: { color} } = this.props
    const activePrimaryColor = this.props.app!.appTheme!.colors!.primary
    return color === activePrimaryColor &&
      <View style={styles.checkView}>
        <Icon type={'Entypo'} name={'check'} size={t(12)} color={color}/>
      </View>
  }

  renderLockView() {
    const { item: { clocked, color } } = this.props
    const isWhite = color === '#f0f0f0'
    const viewStyle = [styles.lockView, {backgroundColor: isWhite ? '#fff' : styles.lockView.backgroundColor}] as any
    return clocked && <View style={viewStyle}>
      <Icon type={'FontAwesome5'} name={'lock'} size={t(16)} color={'#525252'}/>
    </View>
  }

  render() {
    const {
      item: {
        color,
        title
      }
    } = this.props
    return (
      <ButtonContainer style={styles.itemView}
                       onPress={() => this.onItemPress(this.props.item)}>
        <View style={[styles.colorsView, { backgroundColor: color }]}>
          {this.renderCheckView()}
          {this.renderLockView()}
        </View>
        <Space height={d(10)}/>
        <Text style={[material.body1, { color: '#989898' }]}>{title}</Text>
      </ButtonContainer>
    )
  }
}


export default ThemeSetting
