import React, { useMemo, useState } from 'react';
import { Box, Button, Tab, Tabs } from 'grommet';
import { CodeSandbox, Expand, Github } from 'grommet-icons';

import DocsCode from './DocsCode';
import DocsPreview from './DocsPreview';
import DocsXray from './DocsXray';

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  readOnly: true,
};

export default function DocsMain({
  children,
  files = [],
  sandboxUrl,
  githubUrl,
}) {
  const [active, setActive] = useState(2);
  const [fullScreen, setFullScreen] = useState(false);
  const showPreview = useMemo(() => active === 0, [active]);
  const showCode = useMemo(() => active === 1, [active]);
  const showXray = useMemo(() => active === 2, [active]);

  return (
    <Box gap="small" flex={false}>
      <Box direction="row" justify="between">
        <Tabs activeIndex={active} onActive={(next) => setActive(next)}>
          <Tab title="Preview"></Tab>
          <Tab title="Code"></Tab>
          <Tab title="Xray"></Tab>
        </Tabs>
        <Box direction="row" align="center" gap="medium">
          <Button
            onClick={() => setFullScreen(true)}
            icon={<Expand size="small" />}
            color="control"
            plain
          />
          <Button
            icon={<CodeSandbox size="22px" />}
            color="control"
            href={sandboxUrl}
            plain
          />
          <Button
            icon={<Github size="22px" />}
            color="control"
            href={githubUrl}
            plain
          />
        </Box>
      </Box>
      {showPreview && (
        <DocsPreview
          children={children}
          fullScreen={fullScreen}
          onShrink={() => setFullScreen(false)}
        />
      )}
      {showCode && <DocsCode files={files} options={options} />}
      {showXray && <DocsXray children={children} />}
    </Box>
  );
}
