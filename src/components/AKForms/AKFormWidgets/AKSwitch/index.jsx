import { AKClsx } from '@utils';
import { Switch } from 'antd';
import styles from './AKSwitch.module.css';
export const AKSwitch = ({
  id,
  handleChange,
  AKSwitchClassname,
  size,
  checkedChildren,
  unCheckedChildren,
  ...rest
}) => {
  return (
    <div>
      <Switch
        id={id}
        className={AKClsx(styles.AkSwitch, AKSwitchClassname)}
        onChange={handleChange}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        size={size}
        {...rest}
      />
    </div>
  )
}
