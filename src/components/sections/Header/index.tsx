import * as React from 'react';
import type * as types from 'types';
import { Link } from '../../atoms/Link';

export type Props = types.Header & types.StackbitObjectId;

export const Header: React.FC<Props> = (props) => {
    const { title, navLinks = [], 'data-sb-object-id': objectId } = props;
    const fieldPath = objectId ? `${objectId}:header` : null;
    return (
        <header data-sb-field-path={fieldPath} className="fixed bg-white w-full z-10 top-0 left-0 border-b border-gray-200">
            <div className="flex flex-wrap items-center py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <div className="mb-1 mr-2 flex-grow">
                        <p className="text-primary font-semibold" data-sb-field-path=".title">
                            {title}
                        </p>
                    </div>
                )}
                {navLinks.length > 0 && (
                    <nav className="flex flex-wrap" data-sb-field-path=".navLinks">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                {...link}
                                className={`${index !== navLinks.length - 1 ? 'mr-2' : ''} mb-1`}
                                data-sb-field-path={`.${index}`}
                            />
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};
