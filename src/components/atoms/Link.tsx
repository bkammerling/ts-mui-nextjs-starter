import * as React from 'react';
import NextLink from 'next/link';
import type * as types from 'types';

export type Props = types.Link & types.StackbitFieldPath & { className?: string };

export const Link: React.FC<Props> = (props) => {
    const { className, label, url, 'data-sb-field-path': fieldPath } = props;
    const annotations = fieldPath ? [fieldPath, `${fieldPath}.url#@href`].join(' ').trim() : null;

    // Simple link component; styling should be provided via className (Tailwind)
    return (
        <NextLink href={url} className={className} data-sb-field-path={annotations}>
            <span data-sb-field-path=".label">{label}</span>
        </NextLink>
    );
};
