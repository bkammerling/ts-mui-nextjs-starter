import * as React from 'react';
import type * as types from 'types';
import { Link } from '../../atoms/Link';
import { Markdown } from '../../atoms/Markdown';

type Props = types.Footer & types.StackbitObjectId;

export const Footer: React.FC<Props> = (props) => {
    const { navLinks = [], copyrightText, 'data-sb-object-id': objectId } = props;
    const fieldPath = objectId ? `${objectId}:footer` : null;
    return (
        <footer data-sb-field-path={fieldPath} className="flex flex-wrap items-center py-3">
            {navLinks.length > 0 && (
                <nav className="flex flex-wrap flex-grow" data-sb-field-path=".navLinks">
                    {navLinks.map((link, index) => (
                        <Link key={index} {...link} className="mr-2" data-sb-field-path={`.${index}`} />
                    ))}
                </nav>
            )}
            {copyrightText && (
                <div className="text-secondary">
                    <Markdown text={copyrightText} data-sb-field-path=".copyrightText" />
                </div>
            )}
        </footer>
    );
};
