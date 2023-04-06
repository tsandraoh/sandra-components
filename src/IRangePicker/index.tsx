import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';

// 便捷动态周期
const { RangePicker } = DatePicker;

type RangeValue = [Moment | null, Moment | null] | null;
interface Props {
  disabled?: boolean;
  value?: RangeValue;
  onChange?: (value: RangeValue) => void;
}
const App: React.FC<Props> = ({ value, ...rest }) => {
  const [dates, setDates] = useState<RangeValue>(null);

  const disabledDate = (current: Moment) => {
    if (!dates) {
      return false;
    }

    const tooLate = dates[0] && current.diff(dates[0], 'M') >= 2;
    const tooEarly = dates[1] && dates[1].diff(current, 'M') >= 2;
    return !!tooEarly || !!tooLate || current > moment();
  };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };

  return (
    <RangePicker
      picker="month"
      value={dates || (value as any)}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onOpenChange={onOpenChange}
      {...rest}
    />
  );
};

export default App;
