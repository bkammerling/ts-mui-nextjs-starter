import * as React from 'react';
import NextLink from 'next/link';
import type * as types from 'types';

export type Props = types.Button & types.StackbitFieldPath & { className?: string };

export const Button: React.FC<Props> = (props) => {
    const { className, label, url, 'data-sb-field-path': fieldPath } = props;
    const annotations = fieldPath ? [fieldPath, `${fieldPath}.url#@href`].join(' ').trim() : null;

    // Simple link-styled button ready for Tailwind classes
    return (
        <NextLink href={url} className={className} data-sb-field-path={annotations}>
            <span data-sb-field-path=".label">{label}</span>
        </NextLink>
    );
};
