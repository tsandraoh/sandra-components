import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';

const { RangePicker } = DatePicker;

type RangeValue = [Moment | null, Moment | null] | null;
interface Props {
  unitOfTime?: moment.unitOfTime.Diff | undefined;
  diffNum?: 2;
  value?: RangeValue;
  onChange?: (value: RangeValue) => void;
}
const App: React.FC<Props> = ({
  value,
  unitOfTime = 'M',
  diffNum = 2,
  onChange,
  ...rest
}) => {
  const [dates, setDates] = useState<RangeValue>(null);
  const [values, setValues] = useState<RangeValue>(value || null);

  const disabledDate = (current: any) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], unitOfTime) >= diffNum;
    const tooEarly = dates[1] && dates[1].diff(current, unitOfTime) >= diffNum;
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
      value={dates || (values as any)}
      disabledDate={disabledDate}
      onCalendarChange={(val: any) => setDates(val)}
      onOpenChange={onOpenChange}
      onChange={(val: any) => {
        setValues(val);
        if (onChange) onChange(val);
      }}
      {...rest}
    />
  );
};

export default App;
