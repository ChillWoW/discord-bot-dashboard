import { ReactNode, useState } from "react";
import useStyles from "./Tabs.styles";
import { motion } from "framer-motion";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onTabChange?: (value: string) => void;
}

const Tabs = ({ tabs, defaultValue, onTabChange }: TabsProps) => {
  const { classes, cx } = useStyles();
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);

  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabList}>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={cx(classes.tab, {
              [classes.activeTab]: activeTab === tab.value,
            })}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </div>
        ))}
        <motion.div
          className={classes.indicator}
          initial={false}
          animate={{
            left: `${(100 / tabs.length) * activeIndex}%`,
            width: `${100 / tabs.length}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
      <div className={classes.tabPanel}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
