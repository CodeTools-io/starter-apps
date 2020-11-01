import React, { useMemo, lazy } from 'react';
import { Box, Markdown, Heading, Paragraph } from 'grommet';

import DocsCard from './DocsCard';

function DocsAboutInlineCode({ children }) {
  return (
    <Box style={{ display: 'inline' }} pad={{ horizontal: 'xsmall' }} border>
      <code>{children}</code>
    </Box>
  );
}

function DocsAboutPreview({ children, caption = 'Preview', ...props }) {
  return (
    <>
      <Heading level="6" margin={{ bottom: 'xsmall' }}>
        {caption}
      </Heading>
      <Box
        style={{ position: 'relative' }}
        height={{ min: 'small' }}
        fill="horizontal"
        flex={false}
        border={{
          side: 'all',
          style: 'dashed',
        }}
        {...props}
      >
        {children}
      </Box>
    </>
  );
}
export default function DocsAbout({ doc }) {
  const Components = useMemo(() => {
    if (!doc?.components) {
      return {};
    }

    return Object.keys(doc?.components)?.reduce((accum, componentName) => {
      const Component = lazy(() =>
        import(`../../../${doc?.directory}/${componentName}`)
      );
      return {
        ...accum,
        [componentName]: {
          component: Component,
        },
      };
    }, {});
  }, [doc]);

  return (
    <Box className="DocsAbout" gap="small" flex={false}>
      <DocsCard>
        <Box pad={{ horizontal: 'large', top: 'small', bottom: 'large' }}>
          {doc?.content && (
            <Markdown
              components={{
                h1: {
                  component: Heading,
                  props: {
                    level: 1,
                    margin: { top: 'large', bottom: 'small' },
                  },
                },
                h2: {
                  component: Heading,
                  props: {
                    level: 2,
                    margin: { top: 'large', bottom: 'small' },
                  },
                },
                h3: {
                  component: Heading,
                  props: {
                    level: 3,
                    margin: { top: 'large', bottom: 'xsmall' },
                  },
                },
                h4: {
                  component: Heading,
                  props: {
                    level: 4,
                    margin: { top: 'medium', bottom: 'xsmall' },
                  },
                },
                h5: {
                  component: Heading,
                  props: {
                    level: 5,
                    margin: { top: 'medium', bottom: 'xsmall' },
                  },
                },
                h6: {
                  component: Heading,
                  props: {
                    level: 6,
                    margin: { top: 'medium', bottom: 'xsmall' },
                  },
                },
                p: {
                  component: Paragraph,
                  props: { size: 'medium', fill: true },
                },
                code: {
                  component: DocsAboutInlineCode,
                },
                Preview: {
                  component: DocsAboutPreview,
                },
                ...Components,
              }}
            >
              {doc?.content}
            </Markdown>
          )}
        </Box>
      </DocsCard>
    </Box>
  );
}
