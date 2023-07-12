"use client";

import { useState } from "react";
import Image from "next/image";
// import { calculateCarRent } from "@utils";
// import CustomButton from "./CustomButton";
// import CarDetails from "./CarDetails";
import { CustomButton, PkmnDetails } from "~~/components";
import { IPokeProps } from "~~/types";

interface PkmnCardProps {
  pkmn: IPokeProps;
}

const PkmnCard = ({ pkmn }: PkmnCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // const {idNumber, name, type1, type2  } = pkmn;

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="car-card group">
      {/* <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>

        <Image
          src={!isLiked ? "/heart-outline.svg" : "/heart-filled.svg"}
          width={24}
          height={24}
          alt="heart"
          className="object-contain cursor-pointer mt-0.5"
          onClick={() => setIsLiked(!isLiked)}
        />
      </div> */}

      {/* <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p> */}

      <div className="car-card__image">
        <Image
          // TODO: change src below
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idNumber}.png`}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <p className="car-card__price">
        <span className="car-card__price-dollar">#</span>
        {idNumber}
        <span className="car-card__price-day">/day</span>
      </p>
      <p className="car-card__price">{name}</p>

      <div className="relative flex w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <p className={`car-card__icon-text ${type1}`}>{type1}</p>
          </div>
          <div className="car-card__icon">
            <p className={`car-card__icon-text ${type1}`}>{type2}</p>
          </div>
          {/* <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div> */}
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={openModal}
          />
        </div>
      </div>

      <PkmnDetails isOpen={isOpen} closeModal={closeModal} pkmn={pkmn} />
    </div>
  );
};

export default PkmnCard;

// TODO
// https://www.pokemon.com/us/pokedex
// image
// pokemon number
// pokemon name
// type1    type2
