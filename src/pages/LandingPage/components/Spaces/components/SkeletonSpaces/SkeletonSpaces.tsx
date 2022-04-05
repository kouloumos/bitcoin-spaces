import React from "react";
import { Skeleton } from "@mui/material";

import theme from "src/theme/theme";
import { Space } from "../";

const SkeletonSpaces = () => {
  return Array.from(Array(3).keys()).map((_, index) => (
    <Skeleton
      key={index}
      style={{ backgroundColor: theme.colors.grey }}
      width={"100%"}
    >
      <Space
        index={index}
        _id={"fd"}
        host_ids={[]}
        state="live"
        showDetails={false}
        onChevronClick={() => {}}
      />
    </Skeleton>
  ));
};

export default SkeletonSpaces;