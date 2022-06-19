import React, { FC } from 'react';
import classnames from 'classnames';

interface IAvatar {
  w: string;
  h: string;
  src?: string;
  name: string;
}

const Avatar: FC<IAvatar> = ({ w, h, src, name }) => {
  return (
    <div className="overflow-hidden flex">
      {src ? (
        <img
          className={classnames('inline-block rounded-full ring-2 ring-white border-2', w, h)}
          src={src}
          alt=""
        />
      ) : (
        <div
          className={classnames(
            'flex justify-center items-center font-bold rounded-full border-2',
            w,
            h,
          )}>
          {name}
        </div>
      )}
    </div>
  );
};

export default Avatar;
