import { APILoader, Map, Marker } from '@uiw/react-amap';
import { Select } from 'antd';
import React, { type FC } from 'react';

import './index.less';

const IMap: FC = () => {
  //  https://restapi.amap.com/v3/assistant/inputtips?parameters?key=d079d062b4ad200ef5cd0117b00c451b&keywords=${''}
  const onSearch = (value: string) => {
    console.log(value, '--value');
  };

  const InnerMap = () => {
    /**
     * zoom?:
     * 	地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。
     */
    return (
      <div className="map-wrap">
        <Map zoom={14}>
          <Marker
            visiable={true}
            title="上海市"
            position={new AMap.LngLat(121.472644, 31.231706)}
          />
        </Map>
      </div>
    );
  };

  return (
    <div>
      <Select
        showSearch
        className="search-wrap"
        placeholder="请输入关键词搜索"
        onSearch={onSearch}
      />
      <APILoader akay="d079d062b4ad200ef5cd0117b00c451b">
        <InnerMap />
      </APILoader>
    </div>
  );
};

export default IMap;
