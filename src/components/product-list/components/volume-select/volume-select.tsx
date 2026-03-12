import { useState, useRef, useEffect, type FC } from "react";
import styles from "./volume-select.module.css";
import VectorIcon from "@/components/common/vector-icon";

interface Volume {
  id: string;
  label: string;
  in_stock: boolean;
}

interface VolumeSelectProps {
  volumes: Volume[];
  selectedId: string;
}

const VolumeSelect: FC<VolumeSelectProps> = ({ volumes, selectedId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(selectedId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedVolume = volumes.find((v) => v.id === currentId) || volumes[0];

  const handleSelect = (volume: Volume) => {
    if (volume.in_stock) {
      setCurrentId(volume.id);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.selectButton}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{selectedVolume.label}</span>
        <VectorIcon id="arrow" width="10" height="10" />
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {volumes.map((volume) => (
            <li
              key={volume.id}
              className={`
                ${styles.option} 
                ${volume.id === currentId ? styles.selected : ""}
                ${!volume.in_stock ? styles.disabled : ""}
              `}
              onClick={() => handleSelect(volume)}
            >
              <span className={styles.label}>{volume.label}</span>
              {!volume.in_stock && (
                <span className={styles.outOfStock}>нет</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VolumeSelect;
