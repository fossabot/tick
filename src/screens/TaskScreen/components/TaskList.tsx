import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { useSelector } from 'react-redux';
import { AppState } from 'src/models';
import TaskItem from './TaskItem';

interface Props {
  onGetSelectedId?: Function;
  listType: string;
}

const TaskList: React.FC<Props> = ({ onGetSelectedId, listType }) => {
  const { list } = useSelector((state: AppState) => state.task);
  const { data = [] } =
    (list && list.find(item => item.type === listType)) || {};
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (id: string) => {
    setSelectedId(id);
    onGetSelectedId(id);
  };

  return (
    <View>
      {data.length > 0 && (
        <Text category='label' style={{ marginBottom: 10, marginTop: 20 }}>
          {listType}
        </Text>
      )}
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }: { item: any }) => (
          <TaskItem listType={listType} task={item} onSelect={handleSelect} />
        )}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

TaskList.defaultProps = {
  onGetSelectedId: () => {}
};

export default TaskList;
