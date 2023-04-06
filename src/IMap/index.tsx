import { APILoader, Map, Marker } from '@uiw/react-amap';
import React, { useState, type FC } from 'react';
import request from 'umi-request';
import DebounceSelect from './debounceSelect';

import './index.less';

interface Option {
  label: string;
  value: string;
}

const IMap: FC = () => {
  const [position, setPosition] = useState('121.472644, 31.231706');

  async function query(username: string): Promise<Option[]> {
    return request
      .get(
        `https://restapi.amap.com/v3/assistant/inputtips?key=ccd42ebf871361d006beae0a870263f3&keywords=${username}`,
      )
      .then((res) => {
        const { tips } = res;
        const optionsRes = (tips || []).map(
          ({ name, location }: { name: string; location: string }) => ({
            label: name,
            value: location,
          }),
        );
        return Promise.resolve(optionsRes);
      });
  }

  const InnerMap = () => {
    const parsedPosition: number[] = position.split(',').map((i) => Number(i));
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
            position={new AMap.LngLat(parsedPosition[0], parsedPosition[1])}
          />
        </Map>
      </div>
    );
  };

  return (
    <div>
      <DebounceSelect
        showSearch
        className="search-wrap"
        placeholder="请输入关键词搜索"
        fetchOptions={query}
        onChange={(newValue: string) => {
          setPosition(newValue);
        }}
      />
      <APILoader akay="d079d062b4ad200ef5cd0117b00c451b">
        <InnerMap />
      </APILoader>
    </div>
  );
};

export default IMap;
